import type { App } from './App';
import type { Document } from './Document';
import type { EventVisualization } from './EventVisualization';
import type { Map } from './Map';
import type { Report } from './Report';
import type { SimpleEventVisualizationView } from './SimpleEventVisualizationView';
import type { SimpleVisualizationView } from './SimpleVisualizationView';
import type { User } from './User';

export type DashboardSearchResult = {
    appCount: number;
    apps?: Array<App>;
    eventChartCount: number;
    eventCharts?: Array<EventVisualization>;
    eventReportCount: number;
    eventReports?: Array<EventVisualization>;
    eventVisualizationCount: number;
    eventVisualizations?: Array<SimpleEventVisualizationView>;
    mapCount: number;
    maps?: Array<Map>;
    reportCount: number;
    reports?: Array<Report>;
    resourceCount: number;
    resources?: Array<Document>;
    searchCount: number;
    userCount: number;
    users?: Array<User>;
    visualizationCount: number;
    visualizations?: Array<SimpleVisualizationView>;
};

