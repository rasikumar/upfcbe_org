import { useState } from "react";
import { Link, useParams } from "react-router";
import Auth from "@/hooks/AuthHook";
import { toast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "../ui/label";

const UpdatePassword = ({ className, ...props }) => {
  const { token } = useParams();
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const auth = Auth();
  const { UpdatePassword } = auth;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast({
        title: "Error!",
        variant: "destructive",
        description: "Passwords do not match.",
      });
      return;
    }

    if (!validatePassword(data.password)) {
      toast({
        title: "Error!",
        variant: "destructive",
        description:
          "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.",
      });
      return;
    }

    UpdatePassword.mutate({
      newPassword: data.password,
      token,
    });
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Update Password</CardTitle>
              <CardDescription>Enter Your New Password</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 px-4">
                <div className="grid gap-4 relative">
                  <div className="relative flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="New Password"
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <div className="relative flex flex-col gap-2">
                    <Label htmlFor="confirmpassword">Confirm Password</Label>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={data.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full mb-4">
                  Update
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
