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
    <section id="quote" className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 via-primary/5 to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">تواصل معنا</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-6" data-testid="text-quote-title">
                جاهز للحصول على عرض؟
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                فريقنا جاهز للرد على استفساراتك وتقديم أفضل عرض سعر يناسب احتياجاتك. املأ النموذج وسنتواصل معك في أقرب وقت.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="tel:920000000" 
                className="flex items-center gap-5 p-6 bg-gradient-to-l from-primary/5 to-accent/5 rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 group"
                data-testid="link-contact-phone"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative">
                  <Phone className="w-10 h-10 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-muted-foreground mb-2">اتصل بنا مباشرة - متاحون الآن</div>
                  <div className="text-3xl font-extrabold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent tracking-wide">920 000 000</div>
                  <div className="text-sm text-accent font-medium mt-1">مجاني - على مدار الساعة</div>
                </div>
              </a>

              <a 
                href="mailto:info@example.com" 
                className="flex items-center gap-5 p-6 bg-background rounded-2xl border shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                data-testid="link-contact-email"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-medium text-muted-foreground mb-1">راسلنا عبر البريد</div>
                  <div className="text-lg font-semibold text-foreground">info@example.com</div>
                </div>
              </a>
            </div>

            {/* Guarantee */}
            <div className="flex items-center gap-5 p-6 bg-gradient-to-l from-accent/20 to-accent/5 rounded-2xl border border-accent/30">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground text-lg">ضمان أفضل سعر</div>
                <div className="text-muted-foreground">قارن واحصل على أفضل صفقة من شركات التأمين المرخصة</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur-sm">
            <CardHeader className="pb-2 pt-8">
              <CardTitle className="text-2xl font-bold">اطلب عرض سعر مجاني</CardTitle>
              <CardDescription className="text-base">
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
                    size="lg"
                    className="w-full text-lg py-6 shadow-lg hover:shadow-xl transition-shadow" 
                    disabled={mutation.isPending}
                    data-testid="button-submit-quote"
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
