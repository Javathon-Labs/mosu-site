"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Moon, Sun, Settings } from "lucide-react"
import { useTheme } from "next-themes"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null // or return a placeholder
    }

    return (
        <Select onValueChange={setTheme} defaultValue={theme}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">
                    <div className="flex items-center">
                        <Sun className="mr-2 h-4 w-4" />
                        Light
                    </div>
                </SelectItem>
                <SelectItem value="dark">
                    <div className="flex items-center">
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                    </div>
                </SelectItem>
                <SelectItem value="system">
                    <div className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        System
                    </div>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}