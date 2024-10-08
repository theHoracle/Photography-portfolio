import { BriefcaseBusiness, Camera, Home, LayoutDashboard, LineChart, Package, Package2, PanelLeft, Search, Settings, ShoppingCart, Stars, Users2 } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Button } from "../ui/button"
import ThemeToggle from "../ThemeToggle"
import PageBreadcrumb from "./PageBreadcrumb"

const AdminNav = ({
    className,
    children,
  }: {
    className?: string;
    children: ReactNode;
  }) => {
    const navItems = [
        {title: "Dashboard", link: "admin", icon: LayoutDashboard},
        {title: "New project", link: "admin/new-project", icon: BriefcaseBusiness},
        {title: "Reviews", link: "admin/reviews", icon: Stars},
    ]

    return <div className="flex min-h-screen w-full flex-col bg-muted/40 sm:-mt-20">
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <Link
        href="/"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
      >
        <Camera className="h-4 w-4 transition-all group-hover:scale-110" />
        <span className="sr-only">Latunji Photography</span>
      </Link>
      {navItems.map((nav, index) => {
        return <TooltipProvider key={index}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={nav.link}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <nav.icon className="h-5 w-5" />
              <span className="sr-only">{nav.title}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{nav.title}</TooltipContent>
        </Tooltip>
        </TooltipProvider>
      })}
      
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">Settings</TooltipContent>
      </Tooltip>
      </TooltipProvider>
      
    </nav>
  </aside>
  <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
  <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Package className="h-5 w-5" />
            Products
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users2 className="h-5 w-5" />
            Customers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Settings
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
    {/* breadcrumb */}
    <PageBreadcrumb />
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
    <ThemeToggle />
  </header>
  <div className="size-full">
    {children}
  </div>
</div>
</div>
}

export default AdminNav