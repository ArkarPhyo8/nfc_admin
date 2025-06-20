"use client";
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
import { usePaymentTypeQuery } from "@/hooks/paymentType/useQuery";
import LoadingUI from "@/reusable/LoadingUI";
import { PaymentType_Type } from "@/types";


interface PaymentTypeSelectProps {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
}
const PaymentTypeSelect = ({
  disabled,
  value,
  onChange,
}: PaymentTypeSelectProps) => {
  const { data: paymentType, isFetching } = usePaymentTypeQuery();
  return (
    <>
      <FormItem>
        <FormLabel>Payment Type</FormLabel>
        <Select
          disabled={disabled}
          onValueChange={onChange}
          defaultValue={value}
        >
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select card type" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {isFetching ? (
              <div className="h-32 flex gap-2 items-center justify-center">
                <LoadingUI className="w-6 h-6" />
                Loading . . .
              </div>
            ) : (
              paymentType.map((cardType: PaymentType_Type) => (
                <SelectItem key={cardType.id} value={cardType.id}>
                  {cardType.name}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default PaymentTypeSelect;
