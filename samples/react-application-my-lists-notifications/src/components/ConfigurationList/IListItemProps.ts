import { IConfigurationListItem } from './IConfigurationListItem';

export interface IListItemProps {
  item: IConfigurationListItem;
  onDelete: (item:IConfigurationListItem) => void;
}
