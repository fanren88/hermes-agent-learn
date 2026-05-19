import { learn, scenarios, labs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const learnSource = loader({
  baseUrl: "/learn",
  source: learn.toFumadocsSource(),
});

export const scenariosSource = loader({
  baseUrl: "/scenarios",
  source: scenarios.toFumadocsSource(),
});

export const labsSource = loader({
  baseUrl: "/labs",
  source: labs.toFumadocsSource(),
});

export type SectionSource = typeof learnSource;
