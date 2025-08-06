"use client";

import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const { data: session } = authClient.useSession();
  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR LOGO" width={100} height={26.14} />
      </Link>

      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 px-5">
              {session?.user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={session?.user?.image as string | undefined}
                      />
                      <AvatarFallback className="text-lg font-semibold">
                        {session?.user?.name?.split(" ")?.[0]?.[0]}
                        {session?.user?.name?.split(" ")?.[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{session?.user?.name}</h3>
                      <span className="text-muted-foreground block text-xs">
                        {session?.user?.email}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => authClient.signOut()}
                      className="w-full"
                    >
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Sair
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h1 className="text-center text-lg font-semibold">
                      Olá. Autentique-se :).
                    </h1>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/authentication">
                      <LogInIcon className="mr-2 h-4 w-4" />
                      Entrar
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
