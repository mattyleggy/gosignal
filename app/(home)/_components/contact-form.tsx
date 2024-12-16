"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Section from "@/components/sections/section";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/common/typography";
import { FaPaperPlane } from "react-icons/fa6";


// Form validation schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    businessName: z.string().min(2, "Business name must be at least 2 characters"),
    contactNumber: z.string().regex(/^0[0-9]{9}$/, "Invalid Australian phone number"),
    message: z.string().optional(),
});

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            businessName: "",
            contactNumber: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Handle form submission logic here
        console.log(values);
    };

    return (
        <Section backgroundPosition="top">
            <div className="w-full max-w-6xl mx-auto px-4 space-y-6">
                <div className="text-center mb-8 space-y-6">
                    <Badge variant="secondary">Lorem Ipsum Dummy</Badge>
                    <Typography variant="h2" className="max-w-3xl mx-auto">Let&apos;s Get In Touch</Typography>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Our company provides all types of roof repairs, both residential and
                        commercial, regardless of the damage level. We also offer partial tile
                        replacement.
                    </p>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="max-w-7xl mx-auto space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Full Name <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="E.G. John.Smith@Somecompany.Com.Au"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="businessName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Business Name <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.G. My Business" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Contact Number <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="E.G. 04XX XXX XXX" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Your Message Goes Here..."
                                            className="resize-none"
                                            rows={6}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="text-center">
                            <Button type="submit" size="lg" className="gap-2" variant="dropShadow">
                                Send Message                                
                                <FaPaperPlane />
                            </Button >
                        </div>
                    </form>
                </Form>
            </div>
        </Section>
    );
};
