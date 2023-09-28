import ShowChartIcon from '@mui/icons-material/ShowChart';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';


const dashboardData = [
    {
        name: "Default",
        link: "/",
        icon: <DashboardIcon />
    },
    {
        name: "Analytics",
        link: "/analytics",
        icon: <AnalyticsIcon />
    },
]
const applicationData = [
    {
        name: "Statistics",
        link: "/statistics",
        icon: <DataUsageIcon />
    },
    {
        name: "Data",
        link: "/data",
        icon: <SdStorageIcon />
    },
    {
        name: "Chart",
        link: "/charts",
        icon: <ShowChartIcon />
    },
]


export { dashboardData , applicationData }