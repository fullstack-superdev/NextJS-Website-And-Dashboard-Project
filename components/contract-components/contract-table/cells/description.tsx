import { useContractPrePublishMetadata } from "../../hooks";
import { DeployableContractContractCellProps } from "../../types";
import { Skeleton } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { Text } from "tw-components";

export const ContractDescriptionCell: React.FC<
  DeployableContractContractCellProps
> = ({ cell: { value } }) => {
  const address = useAddress();

  const fullPublishMetadata = useContractPrePublishMetadata(value, address);

  return (
    <Skeleton
      isLoaded={
        fullPublishMetadata.isSuccess || !fullPublishMetadata.isFetching
      }
    >
      <Text size="body.md" noOfLines={1}>
        {fullPublishMetadata.data?.latestPublishedContractMetadata
          ?.publishedMetadata.description ||
          (!fullPublishMetadata.isFetching ? "First Version" : "None")}
      </Text>
    </Skeleton>
  );
};
