import React, { useEffect, useState } from "react";
import api from "../../services/api.service";
import { Tabs } from '@mantine/core';
const Inventory = () => {


    return (
        <Tabs defaultValue="locations">
            <Tabs.List>
                <Tabs.Tab value="locations">
                    Locations
                </Tabs.Tab>
                <Tabs.Tab value="storages">
                    Storages
                </Tabs.Tab>
                <Tabs.Tab value="cabinets">
                    Cabinets
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="locations">
                Locations tab content
            </Tabs.Panel>

            <Tabs.Panel value="storages">
                Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value="cabinets">
                Settings tab content
            </Tabs.Panel>
        </Tabs>
    );
};

export default Inventory;