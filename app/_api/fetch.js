import { supabase } from "../_config/supabaseClient";
const fetchData = async (tableName) => {
  const { data, error } = await supabase.from(tableName).select();
  return data;
};

export default fetchData;
