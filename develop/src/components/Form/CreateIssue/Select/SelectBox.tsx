import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FormValuesType } from '..';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Label, Select } from '../../../../shared/style/Label';
import { IconWrap, SelectWrap } from './style';

type SelectBoxType = {
  register: UseFormRegister<FormValuesType>;
};

export const SelectBox: FC<SelectBoxType> = ({ register }) => {
  return (
    <FlexBox alignItems="center" margin="0 0 47px 0">
      <Label selectBox htmlFor="priority">
        Priority:
      </Label>
      <SelectWrap width="267px" height="45px">
        <Select id="priority">
          <option value="female">Low</option>
          <option value="male">Middle</option>
          <option value="other">Hight</option>
        </Select>
        <IconWrap>
          <ExpandMoreIcon />
        </IconWrap>
      </SelectWrap>
    </FlexBox>
  );
};
