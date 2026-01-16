import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quotes", async (req, res) => {
    try {
      const result = insertQuoteRequestSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          error: "بيانات غير صالحة", 
          details: validationError.message 
        });
      }

      const quoteRequest = await storage.createQuoteRequest(result.data);
      
      return res.status(201).json({ 
        success: true, 
        message: "تم استلام طلبك بنجاح",
        id: quoteRequest.id 
      });
    } catch (error) {
      console.error("Error creating quote request:", error);
      return res.status(500).json({ 
        error: "حدث خطأ في الخادم. يرجى المحاولة لاحقاً." 
      });
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quotes", async (_req, res) => {
    try {
      const quotes = await storage.getQuoteRequests();
      return res.json(quotes);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      return res.status(500).json({ 
        error: "حدث خطأ في الخادم." 
      });
    }
  });

  return httpServer;
}
