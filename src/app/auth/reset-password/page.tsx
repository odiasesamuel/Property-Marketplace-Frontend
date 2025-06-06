import RouterReady from "@/components/routerReady";
import ResetPasswordForm from "@/components/form/resetPasswordForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResetPassword = () => {
  return (
    <div className="-mb-10 flex flex-col items-center px-[3.5%]">
      <Card className="mb-10 w-[350px] 2xs:w-[380px] xs:w-[460px] sm:mb-0 sm:w-[600px]">
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Enter your new password to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <RouterReady>
            <ResetPasswordForm />
          </RouterReady>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
