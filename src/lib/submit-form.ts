import { supabase } from "@/lib/supabase";

export type FormType = "contact" | "school-partner" | "newsletter" | "application" | "assessment";

export async function submitForm(formType: FormType, payload: Record<string, unknown>) {
  const { error } = await supabase.from("form_submissions").insert({
    form_type: formType,
    payload,
  });
  return { error };
}
