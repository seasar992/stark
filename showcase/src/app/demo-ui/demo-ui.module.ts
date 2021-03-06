import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_FORMATS, MatOptionModule } from "@angular/material/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { UIRouterModule } from "@uirouter/angular";
import {
	STARK_DATE_FORMATS,
	StarkActionBarModule,
	StarkAppDataModule,
	StarkAppLogoutModule,
	StarkAppMenuModule,
	StarkBreadcrumbModule,
	StarkCollapsibleModule,
	StarkDatePickerModule,
	StarkDateRangePickerModule,
	StarkDropdownModule,
	StarkGenericSearchModule,
	StarkKeyboardDirectivesModule,
	StarkLanguageSelectorModule,
	StarkMinimapModule,
	StarkPaginationModule,
	StarkPrettyPrintModule,
	StarkProgressIndicatorModule,
	StarkRouteSearchModule,
	StarkSliderModule,
	StarkSvgViewBoxModule,
	StarkTableModule
} from "@nationalbankbelgium/stark-ui";
import {
	DemoActionBarPageComponent,
	DemoAppDataPageComponent,
	DemoBreadcrumbPageComponent,
	DemoCollapsiblePageComponent,
	DemoDatePickerPageComponent,
	DemoDateRangePickerPageComponent,
	DemoDropdownPageComponent,
	DemoFooterPageComponent,
	DemoGenericSearchPageComponent,
	DemoGenericService,
	DemoKeyboardDirectivesPageComponent,
	DemoLanguageSelectorPageComponent,
	DemoLogoutPageComponent,
	DemoMenuPageComponent,
	DemoMessagePanePageComponent,
	DemoMinimapPageComponent,
	DemoPaginationPageComponent,
	DemoPrettyPrintPageComponent,
	DemoProgressIndicatorPageComponent,
	DemoRouteSearchPageComponent,
	DemoSidebarPageComponent,
	DemoSliderPageComponent,
	DemoTablePageComponent,
	DemoToastPageComponent
} from "./pages";
import { SharedModule } from "../shared/shared.module";
import { DEMO_STATES } from "./routes";
import {
	TableRegularComponent,
	TableWithCustomActionsComponent,
	TableWithCustomStylingComponent,
	TableWithFixedHeaderComponent,
	TableWithSelectionComponent,
	TableWithTranscludedActionBarComponent
} from "./components";
import { DemoGenericSearchFormComponent, demoGenericSearchReducers } from "./pages/generic-search";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
	imports: [
		UIRouterModule.forChild({
			states: DEMO_STATES
		}),
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatOptionModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatTabsModule,
		MatSlideToggleModule,
		TranslateModule,
		SharedModule,
		StarkActionBarModule,
		StarkAppLogoutModule,
		StarkAppDataModule,
		StarkAppMenuModule,
		StarkBreadcrumbModule,
		StarkCollapsibleModule,
		StarkDatePickerModule,
		StarkDateRangePickerModule,
		StarkDropdownModule,
		StarkGenericSearchModule,
		StarkKeyboardDirectivesModule,
		StarkLanguageSelectorModule,
		StarkMinimapModule,
		StarkPaginationModule,
		StarkProgressIndicatorModule,
		StarkPrettyPrintModule,
		StarkRouteSearchModule,
		StarkSliderModule,
		StarkSvgViewBoxModule,
		StarkTableModule,
		StoreModule.forFeature("DemoGenericSearch", demoGenericSearchReducers)
	],
	declarations: [
		DemoActionBarPageComponent,
		DemoAppDataPageComponent,
		DemoBreadcrumbPageComponent,
		DemoCollapsiblePageComponent,
		DemoDatePickerPageComponent,
		DemoDateRangePickerPageComponent,
		DemoDropdownPageComponent,
		DemoFooterPageComponent,
		DemoGenericSearchPageComponent,
		DemoKeyboardDirectivesPageComponent,
		DemoLanguageSelectorPageComponent,
		DemoLogoutPageComponent,
		DemoMenuPageComponent,
		DemoMessagePanePageComponent,
		DemoMinimapPageComponent,
		DemoPaginationPageComponent,
		DemoPrettyPrintPageComponent,
		DemoProgressIndicatorPageComponent,
		DemoRouteSearchPageComponent,
		DemoSidebarPageComponent,
		DemoSliderPageComponent,
		DemoTablePageComponent,
		TableRegularComponent,
		TableWithSelectionComponent,
		TableWithCustomActionsComponent,
		TableWithTranscludedActionBarComponent,
		TableWithFixedHeaderComponent,
		TableWithCustomStylingComponent,
		DemoToastPageComponent,
		DemoGenericSearchFormComponent
	],
	exports: [
		DemoActionBarPageComponent,
		DemoAppDataPageComponent,
		DemoBreadcrumbPageComponent,
		DemoCollapsiblePageComponent,
		DemoDatePickerPageComponent,
		DemoDateRangePickerPageComponent,
		DemoDropdownPageComponent,
		DemoFooterPageComponent,
		DemoGenericSearchPageComponent,
		DemoKeyboardDirectivesPageComponent,
		DemoLanguageSelectorPageComponent,
		DemoLogoutPageComponent,
		DemoMenuPageComponent,
		DemoMessagePanePageComponent,
		DemoMinimapPageComponent,
		DemoPaginationPageComponent,
		DemoPrettyPrintPageComponent,
		DemoProgressIndicatorPageComponent,
		DemoRouteSearchPageComponent,
		DemoSliderPageComponent,
		DemoTablePageComponent,
		DemoToastPageComponent,
		DemoGenericSearchFormComponent
	],
	providers: [{ provide: MAT_DATE_FORMATS, useValue: STARK_DATE_FORMATS }, DemoGenericService]
})
export class DemoUiModule {}
