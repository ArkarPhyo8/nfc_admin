import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CardTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}
const CardTypeSelect = ({ value, onChange }: CardTypeSelectProps) => {
  return (
    <>
      <FormItem>
        <FormLabel>Email</FormLabel>
        <Select onValueChange={onChange} defaultValue={value}>
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select card type" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="m@example.com">m@example.com</SelectItem>
            <SelectItem value="m@google.com">m@google.com</SelectItem>
            <SelectItem value="m@support.com">m@support.com</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default CardTypeSelect;
