// https://www.sanity.io/docs/structure-builder-cheat-sheet

export const structure = (S) =>
    S.list()
        .title('Artemis Content')
        .items([
            // Global Settings Singleton
            S.listItem()
                .title('Global Settings')
                .id('globalSettings')
                .child(
                    S.document()
                        .schemaType('globalSettings')
                        .documentId('globalSettings')
                        .title('Global Settings')
                ),
            
            S.divider(),
            
            // Pages List
            S.listItem()
                .title('Pages')
                .id('pages')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Home Page')
                                .child(S.document().schemaType('homePage').documentId('homePage')),
                            S.listItem()
                                .title('Team Page')
                                .child(S.document().schemaType('teamPage').documentId('teamPage')),
                            S.listItem()
                                .title('Offerings Page')
                                .child(S.document().schemaType('offeringsPage').documentId('offeringsPage')),
                            S.listItem()
                                .title('Mission Page')
                                .child(S.document().schemaType('missionPage').documentId('missionPage')),
                            S.listItem()
                                .title('Connect Page')
                                .child(S.document().schemaType('connectPage').documentId('connectPage')),
                        ])
                ),
        ]);
