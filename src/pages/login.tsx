import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axiosInstance from "../utils/axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

// Define the schema using Zod
const schema = z.object({
  username: z.string().min(3, { message: "Invalid username" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const { username, password } = data;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const response = await axiosInstance.post(
        "admin_login/index.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/theme"); // Navigate to the Home page
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 m-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={`w-full p-2 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`w-full p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {loading ? (
            <div className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              <Oval
                visible={true}
                height={40}
                width={40}
                color="white"
                ariaLabel="oval-loading"
              />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
