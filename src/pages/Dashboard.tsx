import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ClipboardList, Receipt, FolderOpen } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      title: 'Active Customers',
      value: '24',
      icon: Users,
      description: 'Total active customers',
    },
    {
      title: 'Open Projects',
      value: '12',
      icon: ClipboardList,
      description: 'Projects in progress',
    },
    {
      title: 'Monthly Revenue',
      value: '$45,231',
      icon: Receipt,
      description: 'Revenue this month',
    },
    {
      title: 'Documents',
      value: '145',
      icon: FolderOpen,
      description: 'Total documents stored',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-forest-dark">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-forest" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Activity feed will be displayed here
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Quick action buttons will be displayed here
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}