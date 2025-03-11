import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function AboutMePage() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-8" >
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About Me</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <Accordion type="single" collapsible className="mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your academic background?</AccordionTrigger>
          <AccordionContent>
            I am a commerce student with a strong foundation in business fundamentals,
            accounting principles, and financial management. I have a keen interest in
            understanding how businesses operate and grow in today&apos;s dynamic environment.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What are your areas of interest?</AccordionTrigger>
          <AccordionContent>
            I am particularly interested in financial markets, investment analysis, and
            corporate finance. I&apos;m fascinated by how financial decisions impact
            business growth and sustainability in the global economy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What do you want to specialize in?</AccordionTrigger>
          <AccordionContent>
            I aim to specialize in Investment Banking and Financial Analysis. I&apos;m
            particularly drawn to areas such as mergers and acquisitions, equity research,
            and portfolio management.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How do you stay updated with market trends?</AccordionTrigger>
          <AccordionContent>
            I regularly follow financial news platforms, read market analysis reports,
            and participate in finance-related webinars. I also use platforms like
            Bloomberg and Reuters to track market movements and industry developments.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What skills are you currently developing?</AccordionTrigger>
          <AccordionContent>
            I&apos;m focusing on developing my financial modeling skills, improving my
            understanding of valuation techniques, and enhancing my proficiency in
            financial software like Excel and Bloomberg Terminal. I&apos;m also working
            on my analytical and problem-solving abilities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What are your career aspirations?</AccordionTrigger>
          <AccordionContent>
            My goal is to build a career in investment banking or corporate finance,
            working with leading financial institutions. I aspire to contribute to
            significant financial decisions that shape the business world while
            continuously expanding my knowledge and expertise in the field.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}