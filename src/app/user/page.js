"use client";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

export default function page() {
    const name = Cookies.get("user");
    useEffect(() => {
        if (!name) window.location.href = "/";
    }, []);
    return (
        <div>
            <button
                onClick={() => {
                    Cookies.remove("user");
                    window.location.href = "/";
                }}
            >
                Logout
            </button>
        </div>
    );
}
