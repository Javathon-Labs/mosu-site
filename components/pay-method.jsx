import { useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function DemoPaymentMethod() {
    const [selectedCoin, setSelectedCoin] = useState("bitcoin")
    const coinAddresses = {
        bitcoin: "bc1qxaf39h3xq0jajxyq79uwr9uhkdjmrrj2m4nste",
        litecoin: "ltc1qxaf39h3xq0jajxyq79uwr9uhkdjmrrj2lff5nf"
    }

    const handleCoinChange = (value) => {
        setSelectedCoin(value)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                    Send {selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)} to complete your payment.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <Select onValueChange={handleCoinChange} defaultValue="bitcoin">
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a cryptocurrency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bitcoin">
                            <div className="flex items-center">
                                <Icons.bitcoin className="mr-2 h-4 w-4" />
                                Bitcoin
                            </div>
                        </SelectItem>
                        <SelectItem value="litecoin">
                            <div className="flex items-center">
                                <Icons.litecoin className="mr-2 h-4 w-4" />
                                Litecoin
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
                <div className="text-center mt-8">
                    <p>You can send me crypto by copying the code below:</p>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        {coinAddresses[selectedCoin]}
                    </code>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Continue</Button>
            </CardFooter>
        </Card>
    )
}