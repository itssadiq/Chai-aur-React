import conf from "../conf";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(conf.supabaseURL, conf.supabaseAPIKey);

export const signUp = async (name, email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (data) {
    return data;
  }

  if (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (data) {
    return data;
  }

  if (error) {
    throw error;
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
};

export const getCurrentSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (data) {
    return data;
  }

  if (error) {
    throw error;
  }
};
