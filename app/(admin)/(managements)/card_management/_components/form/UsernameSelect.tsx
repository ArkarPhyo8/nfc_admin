import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { users } from "@/generated/prisma";
import { useUserAccountQuery } from "@/hooks/userManagement/useQuery";
import { cn } from "@/lib/utils";
import LoadingUI from "@/reusable/LoadingUI";
import { Check, ChevronsUpDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface UsernameSelectProps {
  value: string;
  onChange: (value: string) => void;
}
const UsernameSelect = ({ value, onChange }: UsernameSelectProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (triggerRef.current) {
      setWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  //this is getting user accounts for username select option
  const { data: userData, isFetching } = useUserAccountQuery();
  return (
    <>
      <FormItem className="w-full flex flex-col">
        <FormLabel>Username</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                ref={triggerRef}
                variant="outline"
                role="combobox"
                className={cn(
                  "w-full justify-between",
                  !value && "text-muted-foreground"
                )}
              >
                {value
                  ? userData?.userAccounts.find(
                      (user: users) => user.id === value
                    )?.username
                  : "Select Username"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>

          <PopoverContent
            className="p-0"
            align="start"
            style={{ width: width ?? "auto" }}
          >
            <Command className="w-full">
              <CommandInput placeholder="Search Username..." className="h-9" />
              {isFetching ? (
                <div className="h-40 flex gap-2 items-center justify-center">
                  <LoadingUI className="w-6 h-6" />
                  Loading . . .
                </div>
              ) : (
                <CommandList>
                  <CommandEmpty>No username found.</CommandEmpty>
                  <CommandGroup className="w-full">
                    {userData?.userAccounts.map((user: users) => (
                      <CommandItem
                        key={user.id}
                        value={user.id}
                        onSelect={() => onChange(user.id)}
                      >
                        {user.username}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            user.id === value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              )}
            </Command>
          </PopoverContent>
        </Popover>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default UsernameSelect;
