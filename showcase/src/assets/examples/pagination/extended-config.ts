import { Component, Inject, OnInit } from "@angular/core";
import { STARK_LOGGING_SERVICE, StarkLoggingService } from "@nationalbankbelgium/stark-core";
import { StarkPaginateEvent, StarkPaginationConfig } from "@nationalbankbelgium/stark-ui";

@Component({
	selector: "demo-pagination",
	templateUrl: "./demo-pagination.component.html",
	styleUrls: ["./demo-pagination.component.scss"]
})
export class DemoPaginationComponent implements OnInit {
	public paginationExtendedConfig: StarkPaginationConfig;
	public paginateEvent: string;

	public constructor(@Inject(STARK_LOGGING_SERVICE) public logger: StarkLoggingService) {}

	public ngOnInit(): void {
		this.paginationExtendedConfig = {
			totalItems: 20,
			page: 1,
			itemsPerPage: 2,
			itemsPerPageOptions: [2, 4, 6, 8, 10, 20],
			isExtended: true
		};
	}

	public onPaginationChange(paginateEvent: StarkPaginateEvent): void {
		this.paginateEvent = JSON.stringify(paginateEvent);
	}
}
