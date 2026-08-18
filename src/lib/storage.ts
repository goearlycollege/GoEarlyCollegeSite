import { supabase } from "@/lib/supabase";

const APPLICATION_DOCUMENTS_BUCKET = "application-documents";

export async function uploadApplicationFile(file: File) {
  const path = `${crypto.randomUUID()}-${file.name}`;
  const { error } = await supabase.storage.from(APPLICATION_DOCUMENTS_BUCKET).upload(path, file);
  return { path: error ? null : path, error };
}
