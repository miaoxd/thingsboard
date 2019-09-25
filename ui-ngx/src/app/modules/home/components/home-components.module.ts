///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AddEntityDialogComponent } from './entity/add-entity-dialog.component';
import { EntitiesTableComponent } from './entity/entities-table.component';
import { DetailsPanelComponent } from './details-panel.component';
import { EntityDetailsPanelComponent } from './entity/entity-details-panel.component';
import { ContactComponent } from './contact.component';
import { AuditLogDetailsDialogComponent } from './audit-log/audit-log-details-dialog.component';
import { AuditLogTableComponent } from './audit-log/audit-log-table.component';
import { EventTableHeaderComponent } from '@home/components/event/event-table-header.component';
import { EventTableComponent } from '@home/components/event/event-table.component';
import { RelationTableComponent } from '@home/components/relation/relation-table.component';
import { RelationDialogComponent } from './relation/relation-dialog.component';
import { AlarmTableHeaderComponent } from '@home/components/alarm/alarm-table-header.component';
import { AlarmTableComponent } from '@home/components/alarm/alarm-table.component';
import { AlarmDetailsDialogComponent } from '@home/components/alarm/alarm-details-dialog.component';
import { AttributeTableComponent } from '@home/components/attribute/attribute-table.component';
import { AddAttributeDialogComponent } from './attribute/add-attribute-dialog.component';
import { EditAttributeValuePanelComponent } from './attribute/edit-attribute-value-panel.component';
import { DashboardComponent } from '@home/components/dashboard/dashboard.component';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { WidgetComponentService } from './widget/widget-component.service';
import { LegendComponent } from '@home/components/widget/legend.component';
import { AliasesEntitySelectPanelComponent } from '@home/components/alias/aliases-entity-select-panel.component';
import { AliasesEntitySelectComponent } from '@home/components/alias/aliases-entity-select.component';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';

@NgModule({
  entryComponents: [
    AddEntityDialogComponent,
    AuditLogDetailsDialogComponent,
    EventTableHeaderComponent,
    RelationDialogComponent,
    AlarmTableHeaderComponent,
    AlarmDetailsDialogComponent,
    AddAttributeDialogComponent,
    EditAttributeValuePanelComponent,
    AliasesEntitySelectPanelComponent
  ],
  declarations:
    [
      EntitiesTableComponent,
      AddEntityDialogComponent,
      DetailsPanelComponent,
      EntityDetailsPanelComponent,
      ContactComponent,
      AuditLogTableComponent,
      AuditLogDetailsDialogComponent,
      EventTableHeaderComponent,
      EventTableComponent,
      RelationTableComponent,
      RelationDialogComponent,
      AlarmTableHeaderComponent,
      AlarmTableComponent,
      AlarmDetailsDialogComponent,
      AttributeTableComponent,
      AddAttributeDialogComponent,
      EditAttributeValuePanelComponent,
      AliasesEntitySelectPanelComponent,
      AliasesEntitySelectComponent,
      DashboardComponent,
      WidgetComponent,
      LegendComponent,
      WidgetConfigComponent
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EntitiesTableComponent,
    AddEntityDialogComponent,
    DetailsPanelComponent,
    EntityDetailsPanelComponent,
    ContactComponent,
    AuditLogTableComponent,
    EventTableComponent,
    RelationTableComponent,
    AlarmTableComponent,
    AlarmDetailsDialogComponent,
    AttributeTableComponent,
    AliasesEntitySelectComponent,
    DashboardComponent,
    WidgetComponent,
    LegendComponent,
    WidgetConfigComponent
  ],
  providers: [
    WidgetComponentService
  ]
})
export class HomeComponentsModule { }