"use client";
import Input from "@/components/Input/Input";

export default function Home() {
    const LoginSubmit = (e) => {
        e.preventDefault();
    };
    const RegisterSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Input
                ValidText={"სისტემაში შესვლა"}
                FirstInputText={"მომხმარებელი"}
                SecondInputText={"პაროლი"}
                ButtonText={"შესვლა"}
                OnSubmit={LoginSubmit}
            />
        </>
    );
}
