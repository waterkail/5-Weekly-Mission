import React from "react";
import AuthFrame from "../components/auth/AuthFrame";
import AuthSocial from "../components/auth/AuthSocial";
import AuthFormCase from "../components/auth/AuthFormCase";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function signin() {
  return (
    <AuthFrame>
      <AuthFormCase auth="signin"></AuthFormCase>
      <AuthSocial auth="signin"></AuthSocial>
    </AuthFrame>
  );
}
