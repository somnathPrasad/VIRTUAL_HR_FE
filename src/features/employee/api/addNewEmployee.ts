import { useMutation } from "@tanstack/react-query";
import { AxiosPrivate } from "../../../lib/axios";
import { NewEmployeeFormInterface } from "../../../pages/NewEmployee";

interface NewEmployeeInterface extends NewEmployeeFormInterface {
  companyId: string;
}

export const addNewEmployee = async ({
  firstName,
  lastName,
  aadharNumber,
  panNumber,
  mobileNumber,
  address,
  companyId,
}: NewEmployeeInterface) => {
  try {
    const { data } = await AxiosPrivate.post(
      "/register",
      {
        firstName,
        lastName,
        aadharNumber,
        panNumber,
        mobileNumber,
        address,
        companyId,
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return data;
  } catch (error: any) {
    throw Error(error);
  }
};

const useAddNewEmployee = () => useMutation(["addNewEmployee"], addNewEmployee);

export default useAddNewEmployee;
