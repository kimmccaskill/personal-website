import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export function ExperienceItem({
  company,
  role,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">
            {role} <span className="text-muted-foreground">@ {company}</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
