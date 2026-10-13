export type FieldType = "text" | "email" | "number" | "select";

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}
