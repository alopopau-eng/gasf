import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertQuoteRequestSchema, insuranceTypes, type InsertQuoteRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export function QuoteForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      insuranceType: "car",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const response = await apiRequest("POST", "/api/quotes", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك في أقرب وقت لتقديم أفضل العروض",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    mutation.mutate(data);
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-quote-title">
                جاهز للحصول على عرض؟
              </h2>
              <p className="text-lg text-muted-foreground">
                فريقنا جاهز للرد على استفساراتك وتقديم أفضل عرض سعر يناسب احتياجاتك. املأ النموذج وسنتواصل معك في أقرب وقت.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:920000000" 
                className="flex items-center gap-4 p-4 bg-background rounded-lg border hover-elevate"
                data-testid="link-contact-phone"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">اتصل بنا مباشرة</div>
                  <div className="text-xl font-bold text-primary">920 000 000</div>
                </div>
              </a>

              <a 
                href="mailto:info@example.com" 
                className="flex items-center gap-4 p-4 bg-background rounded-lg border hover-elevate"
                data-testid="link-contact-email"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">راسلنا عبر البريد</div>
                  <div className="text-lg text-muted-foreground">info@example.com</div>
                </div>
              </a>
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <div className="font-medium text-foreground">ضمان أفضل سعر</div>
                <div className="text-sm text-muted-foreground">قارن واحصل على أفضل صفقة</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">اطلب عرض سعر</CardTitle>
              <CardDescription>
                املأ النموذج وسنتواصل معك بأفضل العروض
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الاسم الكامل</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="أدخل اسمك الكامل" 
                            {...field} 
                            data-testid="input-fullname"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="example@email.com" 
                            {...field} 
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رقم الجوال</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="05XXXXXXXX" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="insuranceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نوع التأمين</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-insurance-type">
                              <SelectValue placeholder="اختر نوع التأمين" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {insuranceTypes.map((type) => (
                              <SelectItem 
                                key={type.value} 
                                value={type.value}
                                data-testid={`option-insurance-${type.value}`}
                              >
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ملاحظات إضافية (اختياري)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="أي تفاصيل إضافية تود مشاركتها..." 
                            className="resize-none"
                            rows={3}
                            {...field} 
                            data-testid="textarea-notes"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={mutation.isPending}
                    data-testid="button-submit-quote"
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        جاري الإرسال...
                      </span>
                    ) : (
                      "إرسال الطلب"
                    )}
                  </Button>

                  {mutation.isSuccess && (
                    <div className="flex items-center gap-2 text-sm text-accent p-3 bg-accent/10 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span>تم إرسال طلبك بنجاح! سنتواصل معك قريباً.</span>
                    </div>
                  )}
                </form>
              </Form>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                بإرسال هذا النموذج، فإنك توافق على{" "}
                <a href="/privacy" className="text-primary hover:underline">سياسة الخصوصية</a>
                {" "}و{" "}
                <a href="/terms" className="text-primary hover:underline">الشروط والأحكام</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
