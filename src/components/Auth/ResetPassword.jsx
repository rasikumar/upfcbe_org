import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { useState } from "react";
import Auth from "@/hooks/AuthHook";
const ResetPassword = ({ className, ...props }) => {
  const [resetPassword, setResetPassword] = useState({
    email: "",
  });

  const auth = Auth();
  const { ResetPassword } = auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(resetPassword);
    ResetPassword.mutate(resetPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setResetPassword((prevresetPassword) => ({
      ...prevresetPassword,
      [id]: value,
    }));
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">ResetPassword</CardTitle>
              <CardDescription>
                Enter your email below to ResetPassword to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      value={resetPassword.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
