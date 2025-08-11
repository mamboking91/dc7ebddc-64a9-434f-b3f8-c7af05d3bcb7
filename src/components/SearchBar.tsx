import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { useTranslation } from 'react-i18next';

const SearchBar = () => {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="bg-card rounded-full shadow-card p-2 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto">
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 px-6 py-4 border-r border-border">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {t('search.where')}
          </label>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search destinations" 
              className="border-0 p-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        
        <div className="px-6 py-4 border-r border-border">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {t('search.checkIn')}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 h-auto justify-start font-normal text-base hover:bg-transparent"
              >
                <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                {checkIn ? format(checkIn, "MMM dd") : t('search.addDates')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="px-6 py-4 border-r border-border">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {t('search.checkOut')}
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 h-auto justify-start font-normal text-base hover:bg-transparent"
              >
                <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                {checkOut ? format(checkOut, "MMM dd") : t('search.addDates')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="px-6 py-4">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Type
          </label>
          <Select>
            <SelectTrigger className="border-0 p-0 text-base focus:ring-0 focus:ring-offset-0 h-auto">
              <SelectValue placeholder="Stays & Cars" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stays">Places to stay</SelectItem>
              <SelectItem value="vehicles">Vehicles</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Button size="lg" className="rounded-full px-8 py-4 bg-primary hover:bg-primary/90">
        <Search className="h-4 w-4 mr-2" />
        {t('search.search')}
      </Button>
    </div>
  );
};

export default SearchBar;