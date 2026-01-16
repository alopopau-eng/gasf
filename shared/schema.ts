import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Quote request schema
export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  insuranceType: text("insurance_type").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).pick({
  fullName: true,
  email: true,
  phone: true,
  insuranceType: true,
  notes: true,
}).extend({
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  phone: z.string().min(9, "رقم الجوال يجب أن يكون 9 أرقام على الأقل"),
  fullName: z.string().min(2, "الاسم يجب أن يكون حرفين على الأقل"),
  insuranceType: z.enum(["car", "health", "home", "travel", "life"]),
  notes: z.string().optional(),
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

// Insurance types with labels
export const insuranceTypes = [
  { value: "car", label: "تأمين السيارات" },
  { value: "health", label: "تأمين صحي" },
  { value: "home", label: "تأمين المنازل" },
  { value: "travel", label: "تأمين السفر" },
  { value: "life", label: "تأمين الحياة" },
] as const;
