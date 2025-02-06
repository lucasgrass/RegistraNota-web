import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Dashboard() {
	return (
		<div className="[--header-height:calc(theme(spacing.14))]">
			<SidebarProvider className="flex flex-col">
				<SiteHeader />
				<div className="flex flex-1">
					<AppSidebar />
					<SidebarInset>
						<div className="flex flex-1 flex-col gap-4 p-4">
							<div className="grid auto-rows-min gap-4 md:grid-cols-3">
								<div className="aspect-video rounded-xl bg-muted/50">
									<Button>1</Button>
								</div>
								<div className="aspect-video rounded-xl bg-muted/50">
									<Button>2</Button>
								</div>
								<div className="aspect-video rounded-xl bg-muted/50">
									<Button>3</Button>
								</div>
							</div>
							<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
								<Button>4</Button>
							</div>
						</div>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
