import { Card, Col, Row, Statistic } from "antd";
import { useList } from "@refinedev/core";
import { UserOutlined, BookOutlined } from "@ant-design/icons";

export const Dashboard: React.FC = () => {
  const { data: studentsData } = useList({
    resource: "students",
  });

  const totalStudents = studentsData?.total || 0;
  const students = studentsData?.data || [];
  
  // Calculate average score
  const averageScore = students.length > 0 
    ? students.reduce((sum, student) => sum + (student.score || 0), 0) / students.length
    : 0;

  // Count by gender
  const genderCounts = students.reduce((acc, student) => {
    acc[student.sex] = (acc[student.sex] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>📊 Dashboard</h1>
      
      <Row gutter={16} style={{ marginBottom: "24px" }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Students"
              value={totalStudents}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Average Score"
              value={averageScore.toFixed(1)}
              suffix="%"
              prefix={<BookOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Male Students"
              value={genderCounts.Male || 0}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Female Students"
              value={genderCounts.Female || 0}
              valueStyle={{ color: '#eb2f96' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Card title="Welcome to Student Management System" size="small">
            <p>
              This is a modern admin panel built with <strong>Refine.dev</strong>, <strong>Spring Boot</strong>, and <strong>Vite</strong>.
            </p>
            <ul style={{ marginTop: "16px" }}>
              <li>🎓 Manage students with full CRUD operations</li>
              <li>📈 Real-time statistics and analytics</li>
              <li>🎨 Beautiful Ant Design components</li>
              <li>⚡ Lightning-fast performance with Vite</li>
              <li>🏗️ Robust backend with Spring Boot</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
