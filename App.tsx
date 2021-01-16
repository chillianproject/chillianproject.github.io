import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Editable, EditablePreview, EditableInput, Button, ChakraProvider, Checkbox, OrderedList, ListItem, Spacer } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import {
    Spinner,
    CloseButton,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

export default function App () {
    return (
        <View style={styles.container}>
            <ChakraProvider>
                <Spacer></Spacer>

                <Text>Welcome to Mawie</Text>
                <Checkbox></Checkbox>
                <Button>Regular button</Button>

                <Spacer></Spacer>

                <Editable defaultValue="Default Value">
                    <EditablePreview />
                    <EditableInput />
                </Editable>

                <Spacer></Spacer>

                <OrderedList>
                    <ListItem>I am an item</ListItem>
                    <ListItem>In a list</ListItem>
                </OrderedList>

                <Spacer></Spacer>

                <Table size="lg" variant="striped">
                    <TableCaption>Chillian is</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>People</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Julian</Td>
                            <Td>Boy, 1990, Singapore</Td>
                        </Tr>
                        <Tr>
                            <Td>Chinky</Td>
                            <Td>Girl, 1990, Philippines</Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Spacer></Spacer>

                <Spinner />
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
                    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>

                <Spacer></Spacer>
            </ChakraProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
