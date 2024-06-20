import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src="/logo.png" alt="TenFAST Logo" className="h-8 mr-4" />
            <nav className="space-x-4">
              <a href="#fastighetssystem" className="text-gray-700 hover:text-gray-900">Fastighetssystem</a>
              <a href="#om-oss" className="text-gray-700 hover:text-gray-900">Om oss</a>
              <a href="#pris" className="text-gray-700 hover:text-gray-900">Pris</a>
              <a href="#support" className="text-gray-700 hover:text-gray-900">Support</a>
            </nav>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Kom igång</Button>
            <Button>Logga in</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Ett modernt fastighetssystem</h1>
          <p className="mb-8">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</p>
          <p className="mb-8">kontakt@tenfast.se | 08-199 552</p>
          <Button className="bg-white text-blue-900">Kom igång</Button>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Några nöjda kunder</h2>
          <div className="flex justify-center space-x-8">
            <img src="/customer1.png" alt="Customer 1" className="h-12" />
            <img src="/customer2.png" alt="Customer 2" className="h-12" />
            <img src="/customer3.png" alt="Customer 3" className="h-12" />
            <img src="/customer4.png" alt="Customer 4" className="h-12" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Fastighetssystemet för din verksamhet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/feature1.png" alt="Feature 1" className="h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Webbaserat</h3>
              <p>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd din dator eller mobilen!</p>
            </div>
            <div className="text-center">
              <img src="/feature2.png" alt="Feature 2" className="h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enkel prissättning</h3>
              <p>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</p>
            </div>
            <div className="text-center">
              <img src="/feature3.png" alt="Feature 3" className="h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatisera din verksamhet</h3>
              <p>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, m.m.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Det här får du med TenFAST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/benefit1.png" alt="Benefit 1" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Avtalskapare med mallar</h3>
              <p>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller med penna och papper.</p>
            </div>
            <div className="text-center">
              <img src="/benefit2.png" alt="Benefit 2" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hyresgäst inloggning</h3>
              <p>Hyresgästen får inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</p>
            </div>
            <div className="text-center">
              <img src="/benefit3.png" alt="Benefit 3" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bostadskö</h3>
              <p>Bostadskö för hyresgäster. Länka till ett formulär från din hemsida eller via vårt API.</p>
            </div>
            <div className="text-center">
              <img src="/benefit4.png" alt="Benefit 4" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bokföring</h3>
              <p>Automatisk integration med bokföringssystemet Fortnox, så hela processen är automatiserad.</p>
            </div>
            <div className="text-center">
              <img src="/benefit5.png" alt="Benefit 5" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Statistik</h3>
              <p>Få en översikt av hyresintäkterna och vilka hyresgäster som är problematiska.</p>
            </div>
            <div className="text-center">
              <img src="/benefit6.png" alt="Benefit 6" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatiska inbetalningar</h3>
              <p>Ta emot betalningar via Bankgiro, Banköverföring, Autogiro eller Swish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Passar stora och små</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">0 kr</p>
                <p>För privatpersoner och små företag med upp till 5 hyresobjekt.</p>
                <Button className="mt-4">Kom igång</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">10 kr / hyresobjekt / månad</p>
                <p>För privata fastighetsägare upp till 100 hyresobjekt.</p>
                <Button className="mt-4">Kom igång</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Kontakta oss</p>
                <p>För fastighetsbolag eller förvaltare från 10 till tusentals hyresobjekt.</p>
                <Button className="mt-4">Kontakta oss</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Vanliga frågor</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Vad är TenFAST fastighetssystem?</AccordionTrigger>
              <AccordionContent>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Är TenFAST webbaserat?</AccordionTrigger>
              <AccordionContent>Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Vad kostar systemet?</AccordionTrigger>
              <AccordionContent>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Funkar fastighetssystemet på mobilen?</AccordionTrigger>
              <AccordionContent>Ja, du kan använda TenFAST på både dator och mobil.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Hur kan fastighetssystemet vara så billigt?</AccordionTrigger>
              <AccordionContent>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Varför kan jag använda det gratis?</AccordionTrigger>
              <AccordionContent>TenFAST är gratis för mindre hyresvärdar med upp till 5 hyresobjekt.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Vad räknas som ett hyresobjekt?</AccordionTrigger>
              <AccordionContent>Ett hyresobjekt är en bostad eller lokal som hyrs ut.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Vilka funktioner finns i fastighetsprogrammet?</AccordionTrigger>
              <AccordionContent>TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bokföring, statistik, och mycket mer.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Kan jag skapa hyresavtal och signera digitalt?</AccordionTrigger>
              <AccordionContent>Ja, du kan skapa hyresavtal och signera digitalt med BankID eller med penna och papper.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Kan hyresgästen använda det?</AccordionTrigger>
              <AccordionContent>Ja, hyresgästen får inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-11">
              <AccordionTrigger>Indexjustering av hyra</AccordionTrigger>
              <AccordionContent>TenFAST erbjuder automatisk indexjustering av hyror.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-12">
              <AccordionTrigger>Hur gör jag med mina befintliga hyresavtal?</AccordionTrigger>
              <AccordionContent>Du kan importera dina befintliga hyresavtal till TenFAST.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-13">
              <AccordionTrigger>Kan jag få hjälp att komma i gång?</AccordionTrigger>
              <AccordionContent>Ja, vi erbjuder support via e-post och telefon för att hjälpa dig komma igång.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Logga in</p>
          <p>kontakt@tenfast.se | 08-199 552</p>
          <p>Sankt Eriksgatan 114, 113 32 Stockholm</p>
          <p>&copy; TenFAST AB 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;