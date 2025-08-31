import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select, InputNumber } from "antd";

const { Option } = Select;

export const StudentsCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm();

  return (
    <Create 
      saveButtonProps={saveButtonProps}
      title="➕ Create New Student"
    >
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter student name",
            },
          ]}
        >
          <Input placeholder="Enter student name" />
        </Form.Item>
        
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter student email",
            },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input placeholder="Enter student email" />
        </Form.Item>
        
        <Form.Item
          label="Gender"
          name="sex"
          rules={[
            {
              required: true,
              message: "Please select student gender",
            },
          ]}
        >
          <Select placeholder="Select gender">
            <Option value="Male">👨 Male</Option>
            <Option value="Female">👩 Female</Option>
            <Option value="Other">👤 Other</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          label="Score (0-100)"
          name="score"
          rules={[
            {
              required: true,
              message: "Please enter student score",
            },
            {
              type: "number",
              min: 0,
              max: 100,
              message: "Score must be between 0 and 100",
            },
          ]}
        >
          <InputNumber
            placeholder="Enter student score"
            min={0}
            max={100}
            style={{ width: "100%" }}
            addonAfter="%"
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
