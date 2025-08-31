import { Show } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Card, Row, Col, Tag, Avatar, Divider } from "antd";
import { UserOutlined, MailOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface Student {
  id: number;
  name: string;
  email: string;
  sex: string;
  score: number;
}

export const StudentsShow: React.FC = () => {
  const { queryResult } = useShow<Student>();
  const { data, isLoading } = queryResult;
  
  const record = data?.data;

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#52c41a';  // Green
    if (score >= 80) return '#1890ff';  // Blue
    if (score >= 70) return '#faad14';  // Orange
    if (score >= 60) return '#fa8c16';  // Dark orange
    return '#ff4d4f';  // Red
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'B-';
    if (score >= 60) return 'C';
    return 'F';
  };

  const getGenderIcon = (sex: string) => {
    if (sex === 'Male') return '👨';
    if (sex === 'Female') return '👩';
    return '👤';
  };

  return (
    <Show isLoading={isLoading} title={`👁️ Student Details: ${record?.name || ''}`}>
      <Card>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={6} style={{ textAlign: 'center' }}>
            <Avatar size={120} icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }}>
              {record?.name?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Col>
          
          <Col xs={24} sm={18}>
            <Title level={2} style={{ margin: 0 }}>
              {record?.name}
            </Title>
            <Text type="secondary" style={{ fontSize: '16px' }}>
              Student ID: #{record?.id}
            </Text>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12}>
            <Card size="small" title={
              <span>
                <MailOutlined style={{ marginRight: 8 }} />
                Contact Information
              </span>
            }>
              <div style={{ padding: '8px 0' }}>
                <Text strong>Email: </Text>
                <Text copyable>{record?.email}</Text>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={12}>
            <Card size="small" title={
              <span>
                <TeamOutlined style={{ marginRight: 8 }} />
                Personal Information
              </span>
            }>
              <div style={{ padding: '8px 0' }}>
                <Text strong>Gender: </Text>
                <Tag color={record?.sex === 'Male' ? 'blue' : record?.sex === 'Female' ? 'pink' : 'green'}>
                  {getGenderIcon(record?.sex || '')} {record?.sex}
                </Tag>
              </div>
            </Card>
          </Col>

          <Col xs={24}>
            <Card size="small" title={
              <span>
                <TrophyOutlined style={{ marginRight: 8 }} />
                Academic Performance
              </span>
            }>
              <Row gutter={16} align="middle">
                <Col>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '48px', 
                      fontWeight: 'bold', 
                      color: getScoreColor(record?.score || 0),
                      lineHeight: 1
                    }}>
                      {record?.score}%
                    </div>
                    <Text type="secondary">Score</Text>
                  </div>
                </Col>
                <Col>
                  <Divider type="vertical" style={{ height: '60px' }} />
                </Col>
                <Col>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ 
                      fontSize: '36px', 
                      fontWeight: 'bold', 
                      color: getScoreColor(record?.score || 0),
                      lineHeight: 1
                    }}>
                      {getScoreGrade(record?.score || 0)}
                    </div>
                    <Text type="secondary">Grade</Text>
                  </div>
                </Col>
                <Col flex="auto">
                  <div style={{ marginLeft: '24px' }}>
                    <Title level={4} style={{ margin: 0, color: getScoreColor(record?.score || 0) }}>
                      {record?.score && record.score >= 90 ? 'Excellent!' :
                       record?.score && record.score >= 80 ? 'Very Good!' :
                       record?.score && record.score >= 70 ? 'Good' :
                       record?.score && record.score >= 60 ? 'Satisfactory' : 'Needs Improvement'}
                    </Title>
                    <Text type="secondary">
                      {record?.score && record.score >= 90 ? 'Outstanding academic performance' :
                       record?.score && record.score >= 80 ? 'Above average performance' :
                       record?.score && record.score >= 70 ? 'Good academic standing' :
                       record?.score && record.score >= 60 ? 'Meeting basic requirements' : 'Requires additional support'}
                    </Text>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </Show>
  );
};
