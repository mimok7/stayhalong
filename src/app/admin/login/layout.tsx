import React from "react";
export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Minimal pass-through layout for the admin login route
	return <>{children}</>;
}

