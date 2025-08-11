"use client";

import { RadioGroup } from "@radix-ui/react-radio-group";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

const Addresses = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Identificação</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAddress}
            onValueChange={setSelectedAddress}
          >
            <Card>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="add-new" id="add-new" />
                  <Label htmlFor="add-new">Adicionar novo endereço</Label>
                </div>
              </CardContent>
            </Card>
          </RadioGroup>
          {selectedAddress === "add-new" && <Card></Card>}
        </CardContent>
      </Card>
    </div>
  );
};

export default Addresses;
