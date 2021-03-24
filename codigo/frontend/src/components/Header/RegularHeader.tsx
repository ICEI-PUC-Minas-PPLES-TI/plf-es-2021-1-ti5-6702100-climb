import { Box, Flex } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/color-mode";

const LIGHT = "light";

const RegularHeader = () => {
  const { colorMode } = useColorMode();
  return (
    <Box marginRight="auto">
      <Link href="/">
        <a>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={
                colorMode === LIGHT
                  ? "/assets/icon/light-flat.svg"
                  : "/assets/icon/dark-flat.svg"
              }
              alt="Logo"
            />
            <Text fontSize="2xl" fontFamily="Alatsi">
              CLIMB
            </Text>
          </Flex>
        </a>
      </Link>
    </Box>
  );
};

export default RegularHeader;