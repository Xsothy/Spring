import { useTable } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table, Typography } from "antd";
import { 
  List,
  ShowButton,
  EditButton,
  DeleteButton,
  CreateButton
} from "@refinedev/antd";

const { Text } = Typography;

interface Student extends BaseRecord {
  id: number;
  name: string;
  email: string;
  sex: string;
  score: number;
}

export const StudentsList: React.FC = () => {
  const { tableProps } = useTable<Student>({
    syncWithLocation: true,
  });

  return (
    <List
      headerButtons={<CreateButton />}
      title="👨‍🎓 Students Management"
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" sorter />
        <Table.Column 
          dataIndex="name" 
          title="Name" 
          sorter
          render={(value) => <Text strong>{value}</Text>}
        />
        <Table.Column 
          dataIndex="email" 
          title="Email" 
          sorter
          render={(value) => <Text type="secondary">{value}</Text>}
        />
        <Table.Column 
          dataIndex="sex" 
          title="Gender" 
          sorter
          render={(value) => (
            <Text 
              style={{ 
                color: value === 'Male' ? '#1890ff' : value === 'Female' ? '#eb2f96' : '#52c41a' 
              }}
            >
              {value === 'Male' ? '👨' : value === 'Female' ? '👩' : '👤'} {value}
            </Text>
          )}
        />
        <Table.Column 
          dataIndex="score" 
          title="Score" 
          sorter
          render={(value) => (
            <Text 
              style={{ 
                color: value >= 80 ? '#52c41a' : value >= 60 ? '#faad14' : '#ff4d4f',
                fontWeight: 'bold'
              }}
            >
              {value}%
            </Text>
          )}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: Student) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
