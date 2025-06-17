import React from "react";
import AppLayout from '@/layouts/app-layout';
import {
  Package2,
  Users,
  BarChart3,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

// Dummy data
const analyticsData = {
  totalProducts: 254,
  totalUsers: 1823,
  totalCategories: 32,
  totalInventoryValue: 543920,
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);
};

const Dashboard = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Dashboard" />
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-500">
                Welcome back! Here's an overview of your store.
                </p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Products Card */}
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-500">
                            Total Products
                        </CardTitle>
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Package2 size={18} className="text-blue-600" />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                        {analyticsData.totalProducts}
                        </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button
                        variant="link"
                        className="p-0 h-auto text-blue-600 flex items-center cursor-pointer"
                        >
                        View details <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Total Users Card */}
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-500">
                            Total Users
                        </CardTitle>
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Users size={18} className="text-green-600" />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{analyticsData.totalUsers}</div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button
                        variant="link"
                        className="p-0 h-auto text-green-600 flex items-center cursor-pointer"
                        >
                        View details <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Total Categories Card */}
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-500">
                            Total Categories
                        </CardTitle>
                        <div className="p-2 bg-purple-100 rounded-lg">
                            <BarChart3 size={18} className="text-purple-600" />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                        {analyticsData.totalCategories}
                        </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button
                        variant="link"
                        className="p-0 h-auto text-purple-600 flex items-center cursor-pointer"
                        >
                        View details <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* Total Inventory Value Card */}
                <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-gray-500">
                            Total Inventory Value
                        </CardTitle>
                        <div className="p-2 bg-amber-100 rounded-lg">
                            <DollarSign size={18} className="text-amber-600" />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                        {formatCurrency(analyticsData.totalInventoryValue)}
                        </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                        <Button
                        variant="link"
                        className="p-0 h-auto text-amber-600 flex items-center cursor-pointer"
                        >
                        View details <ArrowRight size={16} className="ml-1" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </AppLayout>
  );
};

export default Dashboard;

