import Link from "next/link";
import { useRouter } from "next/router";

const LoginViews = () => {
    const {push} = useRouter();

    const handleLogin = () => {
        push("/product")
    };

    return (
        <div></div>
        // <div>
        //     <h1 className="text-3xl font-bold">Login Page</h1>
        //     <button onClick={() => handleLogin()}>Login</button>
        //     <p style={{color: "red", border: "1px solid red", borderRadius: "10px"}}>Belum punya akun? Registrasi 
        //         <Link href={"/auth/register"}>disini</Link>
        //     </p>
        // </div>
    )
}

export default LoginViews;