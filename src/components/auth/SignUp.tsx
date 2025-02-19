import { IconButton } from "../buttons/IconButton";
import { TextField } from "../input/InputText";
import Link from "next/link";
import Button from "../buttons";
import { useContext, useEffect, useMemo, useState } from "react";
import GlobalContext from "@/context/GlobalContext";
import { useSignUp } from "@/utils/apiHooks/auth/useSignUp";
import { useRouter } from "next/navigation";
import { isEmail, isValidPhoneNumber } from "@/utils/validation";
import { useVerifySignUp } from "@/utils/apiHooks/auth/useVerifySignUp";
import { EyeIcon, EyeOffIcon } from "lucide-react";

type State = "init" | "verify";

export const SignUp = () => {
  const { showSnackBar } = useContext(GlobalContext);
  const { error, isLoading, isComplete, signUp } = useSignUp();
  const {
    error: verifyError,
    isLoading: isVerifyLoading,
    isComplete: isVerifyComplete,
    verifySignUp,
  } = useVerifySignUp();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [activationCode, setActivationCode] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isPasswordRevealed, setIsPasswordRevealed] = useState(false);
  const [state, setState] = useState<State>("init");

  useEffect(() => {
    if (error) {
      showSnackBar({ severity: "error", message: error });
    }
  }, [error]);

  useEffect(() => {
    if (verifyError) {
      showSnackBar({ severity: "error", message: verifyError });
    }
  }, [verifyError]);

  useEffect(() => {
    if (isComplete) {
      setState("verify");
      showSnackBar({
        severity: "success",
        message: "A confirmation code has been sent to your email address",
      });
    }
  }, [isComplete]);

  useEffect(() => {
    if (isVerifyComplete) {
      setState("verify");
      showSnackBar({
        severity: "success",
        message: "Account created successfully",
      });
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  }, [isVerifyComplete]);

  function revealPassword() {
    setIsPasswordRevealed((value) => !value);
  }

  function submit() {
    if (!isEmail(email)) {
      return showSnackBar({ severity: "error", message: "Invalid email" });
    } else if (firstName.trim().length < 1) {
      return showSnackBar({
        severity: "error",
        message: "First name cannot be empty",
      });
    } else if (lastName.trim().length < 1) {
      return showSnackBar({
        severity: "error",
        message: "Last name cannot be empty",
      });
    } else if (!isValidPhoneNumber(phoneNumber)) {
      return showSnackBar({
        severity: "error",
        message: "Invalid phone number",
      });
    } else if (password.trim().length < 4) {
      return showSnackBar({
        severity: "error",
        message: "Password should be at least 4 characters",
      });
    }
    signUp({
      email,
      lastName,
      firstName,
      phoneNumber,
      password,
    });
  }

  function submitConfirmationCode() {
    if (activationCode.length < 4) {
      return showSnackBar({
        severity: "error",
        message: "Invalid activation code",
      });
    }
    verifySignUp({
      activationCode,
      receivedChannel: email,
    });
  }

  const isValidPassword = useMemo(() => {
    if (password.length === 0) {
      return true;
    }
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?])(.{5,})$/.test(
      password
    );
  }, [password]);

  if (state == "init") {
    return (
      <div>
        <h1 className="font-bold text-2xl text-center">Hello, Welcome</h1>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-base text-gray-600 font-light">First Name</p>
            <TextField.Container className="mt-1">
              <TextField.Input
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}
                placeholder="Jane"
                className="text-xs"
              />
            </TextField.Container>
          </div>

          <div>
            <p className="text-base text-gray-600 font-light">Last Name</p>
            <TextField.Container className="mt-1">
              <TextField.Input
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}
                placeholder="Doe"
                className="text-xs"
              />
            </TextField.Container>
          </div>

          <div>
            <p className="text-base text-gray-600 font-light">Email Address</p>
            <TextField.Container className="mt-1">
              <TextField.Input
                id="email"
                autoComplete="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                type="email"
                placeholder="example@gmail.com"
                className="text-xs"
              />
            </TextField.Container>
          </div>

          <div>
            <p className="text-base text-gray-600 font-light">Phone Number</p>
            <TextField.Container id="tel" className="mt-1">
              <TextField.Input
                autoComplete="tel"
                value={phoneNumber}
                type="tel"
                onChange={(evt) => setPhoneNumber(evt.target.value)}
                inputMode="tel"
                placeholder="0810-XXX-XXXX"
                className="text-xs"
              />
            </TextField.Container>
          </div>

          <div>
            <p className="text-base text-gray-600 font-light">Password</p>
            <TextField.Container className="mt-1">
              <TextField.Input
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                type={isPasswordRevealed ? "text" : "password"}
                placeholder="123456"
                className="text-xs"
              />

              <IconButton onClick={revealPassword}>
                {isPasswordRevealed ? (
                  <EyeOffIcon className="text-gray-500 w-4 h-4" />
                ) : (
                  <EyeIcon className="text-gray-500 w-4 h-4" />
                )}
              </IconButton>
            </TextField.Container>
            {isValidPassword || (
              <p className="text-xs text-red-500">
                Password must be at least 5 characters, have at least One
                uppercase and a symbol
              </p>
            )}
          </div>
          <Button
            onClick={submit}
            disabled={!isValidPassword || isLoading}
            isLoading={isLoading}
            className="mt-4 rounded-xl"
          >
            Continue
          </Button>

          <Link href={"/login"} className="flex">
            <Button
              variant="text"
              className="flex-1 mt-4 rounded-xl text-primary"
            >{`I have an account`}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 min-h-[70vh] justify-center">
        <h1 className="font-bold text-2xl text-center">
          Complete Registration
        </h1>

        <div>
          <p className="text-base text-gray-600 font-light">
            Confirmation Code
          </p>
          <TextField.Container className="mt-1">
            <TextField.Input
              value={activationCode}
              onChange={(evt) => setActivationCode(evt.target.value)}
              inputMode="tel"
              placeholder="e.g123456"
              className="text-xs"
            />
          </TextField.Container>
        </div>

        <Button
          onClick={submitConfirmationCode}
          isLoading={isVerifyLoading}
          disabled={isVerifyLoading}
          className="mt-4 rounded-xl"
        >
          Complete Registration
        </Button>
      </div>
    </div>
  );
};
