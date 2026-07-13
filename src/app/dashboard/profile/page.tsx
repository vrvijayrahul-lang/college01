"use client";

import * as React from "react";
import { Mail, Phone, Shield, User as UserIcon } from "lucide-react";
import { useAuth } from "@/components/auth/auth-provider";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { ROLE_LABELS } from "@/lib/constants";
import { initials } from "@/lib/utils";

export default function ProfilePage() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [name, setName] = React.useState(profile?.displayName ?? "");
  const [phone, setPhone] = React.useState(profile?.phone ?? "");

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Profile updated", variant: "success" });
  };

  return (
    <>
      <PageHeader title="My Profile" description="Manage your personal information." />

      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Card>
          <CardContent className="flex flex-col items-center p-6 text-center">
            <Avatar className="h-24 w-24">
              {profile?.photoURL && <AvatarImage src={profile.photoURL} alt={profile.displayName} />}
              <AvatarFallback className="text-2xl">{initials(profile?.displayName)}</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-lg font-semibold">{profile?.displayName}</h2>
            <p className="text-sm text-muted-foreground">{profile?.email}</p>
            <Badge variant="default" className="mt-3 capitalize">
              {profile ? ROLE_LABELS[profile.role] : "User"}
            </Badge>
            <div className="mt-4 flex w-full flex-col gap-2 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> {profile?.email}</span>
              <span className="flex items-center gap-2 text-muted-foreground"><Shield className="h-4 w-4" /> {profile?.emailVerified ? "Verified" : "Unverified"}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" /> Account Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={save} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 90000 00000" />
                </div>
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Input id="role" value={profile ? ROLE_LABELS[profile.role] : ""} disabled />
              </div>
              <Button type="submit" variant="gradient">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
